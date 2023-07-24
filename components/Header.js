export default function Footer({ reports }) {
    const totalRows = reports;
    // const totalRows = reports.length;
    return (
        <footer className="text-black-50 bg-green-500 p-4 mt-4 text-gray-800">
            {totalRows} location world wide
        </footer>
    );
}