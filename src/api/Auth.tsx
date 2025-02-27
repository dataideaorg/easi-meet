interface RegisterData {
    first_name: string
    last_name: string
    username: string;
    email: string;
    password: string;
  }
  
  interface LoginData {
    username: string;
    password: string;
  }
  
  interface AuthResponse {
    access: string;
    refresh: string;
    username: string;
  }
  
  // Register User
  export const register = async (data: RegisterData): Promise<void> => {
    const response = await fetch("https://dataidea.pythonanywhere.com/accounts/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Error registering user");
    }
  };
  
  // Login User
  export const login = async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch("https://dataidea.pythonanywhere.com/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Invalid credentials");
    }
  
    const responseData: AuthResponse = await response.json();
    return responseData;
  };