export default function Footer({ reports }) {
    const totalRows = reports.length;
    return (
        <footer className="flex items-center justify-between p-4 mt-4 bg-green-500 text-gray-800">
            {totalRows} location world wide
        </footer>
    );
}