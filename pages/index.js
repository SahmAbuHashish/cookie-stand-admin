import Head from 'next/head';
import { useState } from 'react';
import { reports } from '../data.js';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer';
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import { useAuth } from "../contexts/auth"



export default function Home() {

  const { login, user, logout } = useAuth();
  const [cookieReports, setCookieReports] = useState(reports);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <Header />

        {/* <main className="container mx-auto p-4">
          <CreateForm onCookieReportCreate={handleCookieReportCreate} />
          {cookieReports.length === 0 ? (
            <h2 className="text-center text-2xl mt-8">No Cookie Stands Available</h2>
          ) : (
            <ReportTable reports={cookieReports} />
          )}
        </main> */}
        <main className="p-4">
          {user ? (
            <CookieStandAdmin />
          ) : (
            <LoginForm />
          )}
        </main>

        <Footer reports={cookieReports} />
      </div>
    </>
  );

  function handleCookieReportCreate(newReport) {
    setCookieReports([...cookieReports, newReport]);
  }
}