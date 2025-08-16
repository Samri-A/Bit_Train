export const fetchData = async(url , search)=>{
   const params = new URLSearchParams(
	{
		limit : 25, 
		search: search
	}
   )
   const response = await fetch(url + '?' + params.toString());
   const data = await response.json()
   return data;
}


