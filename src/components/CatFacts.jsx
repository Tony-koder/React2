import { useEffect, useState } from "react";

export default function CatFacts() {
    const [facts, setFacts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const url = "https://catfact.ninja/facts?limit=5";
    useEffect (() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error("Shit's fucked, chief");
                const apiObj = await res.json();
                setFacts(apiObj.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) return <h1>Error! Try again. Or don't. Up to you</h1>;
    if (loading) return <h1>Loading, please wait</h1>
  return (
    <>
    <h1>Cat Facts</h1>
    {facts.map((factObj, i) => (
        <p key={i}>{factObj.fact}</p>
    ))}
      
    </>
  );
}