import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import OrdersItem from "./OrdersItem";
import OrdersFilter from "./OrdersFilter/OrdersFilter";
import { StatusNew, StatusPaid, StatusDelivUnpaid, StatusAccepted } from "./Status/Status";

export default function OrdersTble() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <div className="table_bg">
          <OrdersFilter />
          <table className="table">
            <thead>
              <tr>
                <th>№</th>
                <th>{t("fullname")}<IoIosArrowDown className="th_icon" /></th>
                <th>{t("telephone")}<IoIosArrowDown className="th_icon" /></th>
                <th>{t("role")}<IoIosArrowDown className="th_icon" /></th>
                <th>Остаток<IoIosArrowDown className="th_icon" /></th>
                <th>Клиент<IoIosArrowDown className="th_icon" /></th>
                <th>Статус<IoIosArrowDown className="th_icon" /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <OrdersItem id={1} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusNew />} />
              <OrdersItem id={2} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusPaid />} />
              <OrdersItem id={3} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusPaid />} />
              <OrdersItem id={4} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusPaid />} />
              <OrdersItem id={5} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusDelivUnpaid />} />
              <OrdersItem id={6} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusDelivUnpaid />} />
              <OrdersItem id={7} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusPaid />} />
              <OrdersItem id={8} num_id="Janibek Maxatov" sum="25 000" paid="20 000" remainder="5000" client="Janibek Maxatov" status={<StatusAccepted />} />
            </tbody>
          </table>
          <PaginationTable />
        </div>
      </div>
    </section>
  );
}
