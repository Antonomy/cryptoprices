import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = 'BC8F5493-95A6-48DD-B8ED-27178949699F'
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

  // state to hold the coin data
  const [coin, setCoin] = useState('null')

  // function to fetch coin data
  // const getCoin = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setCoin(data);
  // };

  const getCoin = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCoin(data)
    } catch (e) {
      console.error(e)
    }
  }

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin()
  }, [])

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>
  }

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading()
};
