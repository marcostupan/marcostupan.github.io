import React from "react";
import DashboardCard from "@/components/dashboards";


const dashboards = [
  {
    id: 1,
    title: "Dashboard Vendas",
    imageUrl: "dashboards/23.DashVendas_08.jpg ",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNTVmNDRjMDItYzVlNy00ODI1LWE4ZDQtZGE0ZGQwZDdiNWMwIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9&pageName=ReportSection",
  },
  {
    id: 2,
    title: "Dashboard Comercio Exterior",
    imageUrl: "dashboards/24.DashComercio_Exterior_01.jpg ",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWNmYWNhOTAtNDgzYS00NzBlLTgwZGEtZjMxMTBhNDY3ODc1IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 3,
    title: "Dashboard Recursos Humanos",
    imageUrl: "dashboards/22. DashRH_06.jpg ",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMjkyMDI0YTAtZTRmZC00OWQ3LWJmMWMtNTU0MzBmYTA0Yjc1IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 4,
    title: "Dashboard Financeiro",
    imageUrl: "dashboards/21. DashFinanceiro02.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNWY1NTEzNDMtZDQ1Yy00OTFkLTljMjAtZmU2ZWJmZmVhNTJmIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9&pageName=ReportSection",
  },
  {
    id: 5,
    title: "Dashboard Análise de Acidentes PRF",
    imageUrl: "dashboards/19. Análise de Acidentes_PRF.jpg ",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYjNjODI5ZTktZTE4MC00NWExLTg0YTItMzhjZmE3ZmUxNWEwIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9&pageName=ReportSection",
  },
  {
    id: 6,
    title: "Dashboard de Vendas",
    imageUrl: "dashboards/20.Dash_Vendas_06.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiM2M2ZTEzZDEtZjRlYS00YWJmLWExMTgtOGQwNzhjNWNmYzZhIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },  
  {
    id: 6,
    title: "Dashboard Financeiro",
    imageUrl: "dashboards/1.DashFin01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNmMyZjNkMGItYjMzMS00NzFjLTgyZGYtNWJhYTQxMGQzOTM3IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 7,
    title: "Dashboard RH 01",
    imageUrl: "dashboards/2.DashRh1.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZDZjMjg5MWQtMGZiMy00OTE4LTljZTktODlhNTE1ZTZmMWEwIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 8,
    title: "Dashboard Produção",
    imageUrl: "dashboards/3.DashProd01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzlkNWFhYmItOTkyMi00MDJlLWI2MzktMjc0ZTI2ODMxMTFhIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 9,
    title: "Dashboard Vendas",
    imageUrl: "dashboards/4.DashVen01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiODgyZmFkNTItMzU1Yi00OGUxLWJkZTktMjA3ZGU0MWQxMTgyIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 10,
    title: "Dashboard Comercial",
    imageUrl: "dashboards/5.DashCom01.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiODcyNDA5ZTAtYTM4OS00MjUzLWFmZTYtNzdjZjAzNzFlNzJhIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 11,
    title: "Dashboard Produção 2",
    imageUrl: "dashboards/6.DashProd02.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjcyMTE2M2MtOWZmNy00OGZjLWFmZTAtMzFmZjcwMDVhYzRkIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 12,
    title: "Dashboard RH 2",
    imageUrl: "dashboards/7.DashRh02.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjIwMzlkYjUtMGIzYy00NjM5LWI4M2EtNDEwZDk5MTE1ZmIyIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 13,
    title: "Dashboard RH 3",
    imageUrl: "dashboards/8. Dash_RH_3.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmQ3YmIyODYtMzRiNi00ODFkLWFlZDEtYjJkOWJlMThmMjVmIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 14,
    title: "Dashboard Vendas 2",
    imageUrl: "dashboards/9. Dash _Vendas_02.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmExZTViNGQtOWY4ZC00NmQxLTk3NWMtNWUwZDJiMGJkYWU2IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 15,
    title: "Dashboard Musicais CCB",
    imageUrl: "dashboards/10. Dash_musical_CCB.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZTNiN2U4YjEtZjJhYi00Y2VlLTg3M2EtOWU5NGVmMzMzYzZiIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 16,
    title: "Dashboard de Vendas 03",
    imageUrl: "dashboards/11.Dash_vendas_03.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2ZiZGU1NDctNDJjYi00ZWFkLThiZTEtMzk0ZjE4ZmMwYjM0IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 17,
    title: "Dashboard de Vendas 04",
    imageUrl: "dashboards/12. Dash de Vendas_04.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDNhZmNhOTctYTVhMi00OTI0LTgwNzMtMTZkZmJjMjkxZDY4IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 18,
    title: "Dashboard de Logística 01",
    imageUrl: "dashboards/13.Dash_Logistica_01.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYjg5ZTZiNzUtZTUwMi00ZTA2LWE5YTYtN2QxNzQxZDI3ZjAzIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 19,
    title: "Dashboard de Logística 02",
    imageUrl: "dashboards/14. Dash_Logistica 02.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZmQ3NGRlMWItYmY3NS00NjQxLThjZmEtMGFjMWEwYmNhOGY1IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 20,
    title: "Dashboard de Recursos Humanos 04",
    imageUrl: "dashboards/15.Dash_RH_04.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZGIwMDVkMTktYjY4ZS00OGZjLWI5OTctNmZlNTQ5YjNjNDk4IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 21,
    title: "Dashboard de Recursos Humanos 05",
    imageUrl: "dashboards/16. Dash_RH_05.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2YxZGEzODgtZTJlMS00YjlhLTg2ODAtMzZjODE5OGFmMzRlIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 22,
    title: "Dashboard de Vendas 05",
    imageUrl: "dashboards/17.Dash_Vendas_05.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzE5NDAyYzItYTBkOC00OWVmLWFkMzUtMDcxZDE5ZWE0NmFmIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 23,
    title: "Dashboard de Análise de Produto 01",
    imageUrl: "dashboards/18. Dash_Análise de Produtos_01.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNmNlNzJkY2QtMDRhOS00YzQ4LThiMDYtN2MzYTBjYWU1YzE4IiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9",
  },
  {
    id: 24,
    title: "Dashboard Financeiro Fluxo de Caixa",
    imageUrl: "dashboards/25.Dash_Fluxo de Caixa_01.jpg ",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOTRkNTViZDAtMzYwMS00NzA2LTkzZWItNWQ1Yzg4ZmMxMDgwIiwidCI6IjA4NjM3ZDUzLTU1NmItNGFmZS04NDJjLTVlYjRkMzIxOWQ2NCJ9&pageName=ReportSection",
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
