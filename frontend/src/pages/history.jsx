import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Card from '@mui/material/Card';

export default function history() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // IMPLEMENT SNACKBAR
      }
    };

    fetchHistory();
  }, []);

  return (<div>
    {
        meetings.map(e=>{
            return(
                <>
                 <Card key={i} variant="outlined">

                 </Card>
                 </>
            )
        })
    }
  </div>);
}
