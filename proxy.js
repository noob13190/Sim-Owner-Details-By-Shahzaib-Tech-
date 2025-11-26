export default async function handler(req, res) {
    const { number } = req.query;

    if (!number) {
        return res.status(400).json({ error: "Number required" });
    }

    const apiUrl = `https://shadowscriptz.xyz/public_apis/simdetailsapi.php?number=${number}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching SIM details" });
    }
}
