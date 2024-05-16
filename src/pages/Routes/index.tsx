import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./RoutesPage.scss";
import axios from "axios";
import image from "../../assets/Map.png";

export const RoutesPage: React.FC = () => {
  interface RoutesResponse {
    name: string;
    description: string;
    created_at: string;
    id: number;
    owner_id: number;
  }
  let names = [
    "Justin",
    "Ivan",
    "Arina",
    "Daniel",
    "Michael",
    "Ivan",
    "Ivan",
    "Ivan",
    "Ivan",
    "Ivan",
    "Ivan",
    "Ivan",
  ];
  let test = [
    {
      name: "Route 1",
      description: "A long tour",
      created_at: "2023-01-03",
      id: 1,
      owner_id: 1,
    },
    {
      name: "Route 1",
      description: "A long tour",
      created_at: "2020-01-03",
      id: 1,
      owner_id: 1,
    },
  ];
  const [routes, setroutes] = useState<Array<RoutesResponse>>(test);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes");
        const data: RoutesResponse[] = response.data;
        if (data) setroutes(data);
      } catch (error) {
        console.error("Ошибка routes:", error);
      }
    };

    fetchData(); // Call the async function here
  }, []);
  console.log(routes);
  return (
    <div className="mainPageContainer">
      <Header text={"Routes"} />

      {routes.map((item) => {
        return (
          <div className="infoContainer">
            <img src={image} className="image" alt="Item Image" />
            <div className="itemDetails">
              <p>#: {item.id}</p>
              <p>
                <b>{item.name}</b>
              </p>
              <p>{item.created_at}</p>
              <p>{names[item.owner_id]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
