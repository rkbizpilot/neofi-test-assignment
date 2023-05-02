import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Input, SelectTokenModal } from "../../../../components";
import { SelectToken } from "../select-token";
import { FormContainer, Spacer } from "./index.styles";

const DEFAULT_COIN = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  current_price: 2292977,
  market_cap: 44373555870109,
  market_cap_rank: 1,
  fully_diluted_valuation: 48127486029717,
  total_volume: 1349485425386,
  high_24h: 2343718,
  low_24h: 2266027,
  price_change_24h: -45619.19153995672,
  price_change_percentage_24h: -1.95071,
  market_cap_change_24h: -970434513445.7656,
  market_cap_change_percentage_24h: -2.14016,
  circulating_supply: 19362006,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 5128383,
  ath_change_percentage: -55.34406,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 3993.42,
  atl_change_percentage: 57247.53431,
  atl_date: "2013-07-05T00:00:00.000Z",
  roi: null,
  last_updated: "2023-05-02T07:13:53.048Z",
};

const USD_TO_INR_CONVERTION_RATE = 80;
const CG_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=25&page=1&sparkline=false`;
const getBianceWebsocketURL = (symbol) =>
  `wss://stream.binance.com:9443/ws/${symbol}usdt@ticker`;
export const TradeForm = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [coinCanBuy, setCoinCanBuy] = useState("");
  const [coinInfo, setCoinInfo] = useState([]);
  const [coinSelected, setCoinSelected] = useState(DEFAULT_COIN);
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const ws = useRef(null);
  useEffect(() => {
    const fetchTokensFromCG = async () => {
      const res = await fetch(CG_URL);
      const data = await res.json();

      setCoinInfo(data);
      setCoinSelected(data[0]);
    };
    fetchTokensFromCG();
  }, []);

  useEffect(() => {
    ws.current = new WebSocket(getBianceWebsocketURL(coinSelected?.symbol));
    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);

      setUpdatedPrice(
        parseFloat(data.o * USD_TO_INR_CONVERTION_RATE)
          .toFixed(2)
          .toLocaleString()
      );
    };
    return () => {
      ws.current.close();
    };
  }, [coinSelected]);
  const handleChange = useCallback(
    (e) => {
      setAmount(e.target.value);
      setCoinCanBuy(e.target.value / updatedPrice);
    },
    [updatedPrice]
  );
  return (
    <FormContainer className="form-container">
      <div className="token-icon">
        <img src={coinSelected?.image} alt="coin" />
      </div>

      <div className="inner">
        <SelectToken
          value={updatedPrice}
          coinSelected={coinSelected}
          onClick={() => setOpen(true)}
        />
        <Spacer />
        <Input
          label="Amount you want to invest"
          placeholder="0.00"
          rightValue="INR"
          onChange={handleChange}
          value={amount}
        />
        <Spacer />
        <Input
          label={`Estimate Number of ${coinSelected?.symbol.toUpperCase(
            0
          )} You will Get`}
          disabled
          placeholder="0.00"
          value={coinCanBuy}
        />

        <Spacer />
        <Button
          text="Buy"
          variant="large"
          onClick={() => alert("WIP")}
          disabled
        />
      </div>
      {open && (
        <SelectTokenModal
          setOpen={setOpen}
          coinInfo={coinInfo}
          setCoinInfo={setCoinInfo}
          coinSelected={coinSelected}
          setCoinSelected={setCoinSelected}
        />
      )}
    </FormContainer>
  );
};
