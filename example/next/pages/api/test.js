export default async function handler(req, res) {
  const response = await fetch(
    "https://d3tmwynvs73u9l.cloudfront.net/public/locales/us/common.json"
  ).then((response) => response.json());

  res.status(200).json({ response });
}
