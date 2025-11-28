export interface Topic {
    id: number;
    emoji: string;
    label: string;
  }
  
  export interface UserData {
    phoneNumber: string;
    code: string;
    firstName: string;
    lastName: string;
    username: string;
    age: string;
    photo: string | null;
    topics: number[]; // Array of Topic IDs
  }
  
  export interface UserContextType {
    userData: UserData;
    updateData: (key: keyof UserData, value: any) => void;
  }

  export interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
  }

  export interface CircleButtonProps {
    onPress: () => void;
    disabled?: boolean;
  }

