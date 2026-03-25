export const baseId  = import.meta.env.VITE_AIRTABLE_BASE_ID;
export const WEB     = import.meta.env.VITE_AIRTABLE_TABLE_WEB;
export const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
export const API_URL = `https://api.airtable.com/v0/${baseId}/${WEB}?listRecords&view=reinnillo_web`;