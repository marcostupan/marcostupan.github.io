import React from "react";
import DashboardCard from "@/components/dashboards";


const dashboards = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    imageUrl: "dashboards/1.DashFin01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNmMyZjNkMGItYjMzMS00NzFjLTgyZGYtNWJhYTQxMGQzOTM3IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 2,
    title: "Dashboard RH 01",
    imageUrl: "dashboards/2.DashRh1.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZDZjMjg5MWQtMGZiMy00OTE4LTljZTktODlhNTE1ZTZmMWEwIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 3,
    title: "Dashboard Produção",
    imageUrl: "dashboards/3.DashProd01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzlkNWFhYmItOTkyMi00MDJlLWI2MzktMjc0ZTI2ODMxMTFhIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 4,
    title: "Dashboard Vendas",
    imageUrl: "dashboards/4.DashVen01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiODgyZmFkNTItMzU1Yi00OGUxLWJkZTktMjA3ZGU0MWQxMTgyIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 5,
    title: "Dashboard Comercial",
    imageUrl: "dashboards/5.DashCom01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiODcyNDA5ZTAtYTM4OS00MjUzLWFmZTYtNzdjZjAzNzFlNzJhIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 6,
    title: "Dashboard Produção 2",
    imageUrl: "dashboards/6.DashProd02.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjcyMTE2M2MtOWZmNy00OGZjLWFmZTAtMzFmZjcwMDVhYzRkIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 7,
    title: "Dashboard RH 2",
    imageUrl: "dashboards/7.DashRh02.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjIwMzlkYjUtMGIzYy00NjM5LWI4M2EtNDEwZDk5MTE1ZmIyIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 8,
    title: "Dashboard RH 3",
    imageUrl: "dashboards/8. Dash_RH_3.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmQ3YmIyODYtMzRiNi00ODFkLWFlZDEtYjJkOWJlMThmMjVmIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 9,
    title: "Dashboard Vendas 2",
    imageUrl: "dashboards/9. Dash _Vendas_02.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmExZTViNGQtOWY4ZC00NmQxLTk3NWMtNWUwZDJiMGJkYWU2IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 10,
    title: "Dashboard Musicais CCB",
    imageUrl: "dashboards/10. Dash_musical_CCB.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYzEwYmM0ZTUtMDg4Mi00MTg5LWFlNDUtNDBiN2E0N2E3YzUzIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
];


const DashboardsPage = () => {
    return (
      <>
        <div className="mt-16">
          {/* Cards Dashboards */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center pt-16 pb-8">
            <h2 className="text-2xl font-semibold mb-4">Dashboards de Power B.I.</h2>
            {/* Cards DashBoards */}
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboards.map((dashboard) => (
                <DashboardCard key={dashboard.id} {...dashboard} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-[40vh] relative flex items-center justify-center text-lg">
          <a href="/contact" className="p-4 rounded-lg ring-1 text-center ring-black bg-black text-white" >
            <h1 className="pointer text-2xl bold">Entre em Contato</h1>
          </a>
        </div>

      </>
    );
  };

export default DashboardsPage;
