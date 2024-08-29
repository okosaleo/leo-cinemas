import axios from "axios"

const newRequest = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
    params: {language: 'en-US', page: '1'},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzIxYTU0ZjU3YmNjN2FhNzYxZWRhNmNiMDljNjUyOSIsIm5iZiI6MTcyNDg5Mjk1NS4yNjI4MSwic3ViIjoiNjZhN2MwNTMzNzg3N2RjMzBhYzY3ZmI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ZYvgS8NlCEWMMK-D3Hta8qxlJiXnjmlKLLFY-4knwdg'
      },
});

export default newRequest