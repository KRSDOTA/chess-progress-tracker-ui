import { ApiService } from "../../ApiService"
import { useState } from "react";
import { useEffect } from "react";


function ChessRapid() {

    const [data, setData] = useState(null);

    const apiService = new ApiService('http://localhost:8080/api'); // Replace with your API base URL

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await apiService.fetchData('/statistics/krsdota'); // Replace with your API endpoint
          setData(result);
        } catch (error) {
          // Handle error, e.g., show an error message to the user
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount
  
    return (
        <div>
            {data ? (
            // Render your data here
            <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
            // Loading indicator or other UI while data is being fetched
            <p>Loading...</p>
            )}
      </div>
    )
}

export default ChessRapid;