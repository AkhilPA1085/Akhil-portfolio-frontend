export const getData = async(endpoint) =>{
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint,{
        method:"GET",
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
    const post = res.json();
    return post;
};

export const postData = async(endpoint,formData) =>{
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        body: JSON.stringify({ data: formData }),
      });

      return response;
};
