// const DashBoard = () =>{
//     return(
//         <h1>DashBoard</h1>
//     );
// }

// export default DashBoard
import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css"
import { useFinancialRecords } from "../../context/financial-record-context";
import { useMemo } from "react";


export const DashBoard = () => {
    const {user} = useUser();
    const {records} = useFinancialRecords();

    const totalMonthly = useMemo(() =>{
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        });
        return totalAmount;
    }, [records])
    
    return (
        <div className="dashboard-container">
            <h1>Welcome {user?.firstName}! Here are your Finances </h1>
            <FinancialRecordForm/>
            <div>Total monthly: {totalMonthly}</div>
            <FinancialRecordList/>
        </div>
    );
};