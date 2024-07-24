export type TPurchaseItem = {
  item: string,
  user: string
}

export type TPurchaseSegment = {
  merchant: string,
  items: TPurchaseItem[]
}

export type TPurchase = {
  id: number,
  serviceAt: string,
  version: number,
  versionAt: string,
  meal: string
  segments: TPurchaseSegment[]
}

export const purchases: TPurchase[] = [
  {
    id: 1,
    serviceAt: '2023-08-28T00:00:00Z',
    version: 1,
    versionAt: '2023-08-24T00:00:00Z',
    meal: 'Monday',
    segments: [
      {
        merchant: 'Little Liquid Lipids',
        items: [
          {
            item: 'Saturated Fat',
            user: 'Sally'
          }
        ],
      },
      {
        merchant: 'Big Burger Buns',
        items: [
          {
            item: 'Veggie Burger',
            user: 'Mark'
          }
        ],
      }
    ]
  },
  {
    id: 2,
    serviceAt: '2023-08-29T00:00:00Z',
    version: 1,
    versionAt: '2023-08-24T00:00:00Z',
    meal: 'Tuesday',
    segments: [
      {
        merchant: 'Big Burger Buns',
        items: [
          {
            item: 'Cheese Burger',
            user: 'Sally'
          },
          {
            item: 'Whopper',
            user: 'Mark'
          }
        ],
      }
    ]
  },
  {
    id: 3,
    serviceAt: '2023-08-30T00:00:00Z',
    version: 2,
    versionAt: '2023-08-24T00:00:00Z',
    meal: 'Wednesday',
    segments: [
      {
        merchant: 'Medium Minced Minestrone',
        items: [
          {
            item: 'Hot Soup',
            user: 'Sally'
          },
          {
            item: 'Hot Soup',
            user: 'Mark'
          }
        ],
      }
    ]
  },
  {
    id: 4,
    serviceAt: '2023-09-01T00:00:00Z',
    version: 1,
    versionAt: '2023-08-22T00:00:00Z',
    meal: 'Thursday',
    segments: [
      {
        merchant: 'Big Burger Buns',
        items: [
          {
            item: 'Cheese Burger',
            user: 'Mark'
          }
        ],
      }
    ]
  }
]
