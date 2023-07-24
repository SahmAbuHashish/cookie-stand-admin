import { useState } from 'react';

export default function CreateForm({ onCookieReportCreate }) {
    const [location, setLocation] = useState('');
    const [minimumCustomers, setMinimumCustomers] = useState('');
    const [maximumCustomers, setMaximumCustomers] = useState('');
    const [averageCookies, setAverageCookies] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newReport = {
            location: location,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            minimum_customers_per_hour: parseInt(minimumCustomers),
            maximum_customers_per_hour: parseInt(maximumCustomers),
            average_cookies_per_sale: parseInt(averageCookies),
        };
        onCookieReportCreate(newReport);
        setLocation('');
        setMinimumCustomers('');
        setMaximumCustomers('');
        setAverageCookies('');
    }
    return (
        <form onSubmit={handleSubmit} className="flex-col w-5/6 mx-auto my-8 bg-green-300 border">
            <h1 className="p-3 text-2xl font-semibold text-center text-gray-800">Create Cookie Stand</h1>
            <div className="flex mx-3 my-4 text-gray-800">
                <label className="mr-2 font-semibold" for='location'>Location</label>
                <input name="location" className="flex-auto"
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                    <label for="minCustomers" >Minimum Customers per Hour</label>
                    <input name="minCustomers" className="flex-auto "
                        type="number"
                        id="minimumCustomers"
                        value={minimumCustomers}
                        onChange={(e) => setMinimumCustomers(e.target.value)} />
                </div>
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                    <label for='maxCustomers'>Maximum Customers per Hour</label>
                    <input name="maxCustomers" className="flex-auto "
                        type="number"
                        id="maximumCustomers"
                        value={maximumCustomers}
                        onChange={(e) => setMaximumCustomers(e.target.value)} />
                </div>
                <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                    <label for='avgCookies'>Average Cookies per Sale</label>
                    <input name="avgCookies" className="flex-auto "
                        type="number"
                        id="averageCookies"
                        value={averageCookies}
                        onChange={(e) => setAverageCookies(e.target.value)} />
                </div>
                <button type="submit" className="w-1/4 font-semibold bg-green-500 rounded text-gray-800">Create</button>
            </div>
        </form>
    );
}