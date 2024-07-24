export type TMerchant = {
  name: string,
  acceptUpdates: boolean
  updateLeadTimeExpiresAt: string
}

export const merchants: TMerchant[] = [
  {
    name: 'Little Liquid Lipids',
    acceptUpdates: true,
    updateLeadTimeExpiresAt: '2023-08-27T00:00:00Z'
  },
  {
    name: 'Big Burger Buns',
    acceptUpdates: true,
    updateLeadTimeExpiresAt: '2023-08-26T00:00:00Z'
  },
  {
    name: 'Medium Minced Minestrone',
    acceptUpdates: false, 
    updateLeadTimeExpiresAt: '2023-08-25T00:00:00Z'
  }
]
