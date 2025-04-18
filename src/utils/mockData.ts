
export interface Baby {
  id: string;
  name: string;
  birthDate: string;
  weight?: string;
  height?: string;
  deviceId?: string;
  sharedWith?: string[];
}

export const mockBabies: Baby[] = [
  {
    id: "1",
    name: "Lucas",
    birthDate: "2023-06-15",
    weight: "3.2 kg",
    height: "50 cm",
    deviceId: "BM-001",
    sharedWith: ["madre@email.com", "pediatra@hospital.com"]
  },
  {
    id: "2",
    name: "Emma",
    birthDate: "2023-08-20",
    weight: "3.4 kg",
    height: "51 cm",
    deviceId: "BM-002",
    sharedWith: ["padre@email.com"]
  },
];
