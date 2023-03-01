import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import useSWR from "swr";

const apiBase = "https://cnodejs.org/api/v1"

async function fetcher(apiPath) {
  const res = await axios.get(`${apiBase}${apiPath}`)
  // console.log(1111, res)
  return res.data?.data || [];
}

function App() {
  const { data, isLoading } = useSWR("/topics", fetcher)
  console.log(data)
  return (
    <div className="App">
      <h2>测试客户端渲染</h2>
      {isLoading ? "loading" : (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <a href={`https://cnodejs.org/topic/${item.id}`} target="_blank" rel="noreferrer" >{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
