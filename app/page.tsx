import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="content-wrapper">
      <main className="main-content">
        <h2>Welcome, {user.firstName}</h2>
        <Balance />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <span>Made with caffeine ☕︎ | </span>
          <a href="https://www.linkedin.com/in/ravindran-v-7a3b80248/" className="footer-link">
            Ravindran
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
