const getSatellitesByName = "select norad_id, satellite_name from satellite where satellite_name ilike '%' || $1 ||'%' limit 10";


module.exports = {
    getSatellitesByName
};