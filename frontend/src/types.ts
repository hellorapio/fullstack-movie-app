export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Login {
  password: string;
  email: string;
}
export interface Signup {
  password: string;
  email: string;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
