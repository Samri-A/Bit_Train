import {geolocated, useGeolocated} from 'react-geolocated';
import React , {Component} from 'react';
export default getlocation = ()=>{
    const {coords  , isGeolocationAvialable , isGeolocationEnabled} = useGeolocated({
       positionOptions:{
        enableHighAccuracy: true,
       },
       userDecisionTimeout: 5000
    });

    return !isGeolocationAvialable ?(
        <div>Your browser does not support Geolocation</div>
    ): !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>Location added</div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
} 