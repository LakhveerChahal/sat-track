const getSatellitesByName = `
select norad_id, satellite_name from satellite where satellite_name ilike '%' || $1 ||'%' 
order by satellite_name
offset $2
limit $3`;


module.exports = {
    getSatellitesByName
};