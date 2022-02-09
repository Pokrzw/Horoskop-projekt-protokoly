import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProfileList() {
    const [profiles, setProfiles] = useState([]);

    const { pattern } = useParams();   
    
    const getByPattern = async (value) => {
        return axios.get(`http://localhost:5000/accounts/search?pattern=${value}`)
    }

    useEffect(() => { (async () => {
        if(pattern) {
            getByPattern(pattern).then(res => {setProfiles(res.data);});
        }
    })()}, [pattern]);

    return ( <ul>
        {profiles.length!==0 && profiles.map(profile => {return (<li key={profile.login}><Link to={`/profile/${profile._id}`}>{profile.login}</Link></li>)})}
    </ul> );
}

export default ProfileList;