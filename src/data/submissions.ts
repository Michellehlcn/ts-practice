export type TSelection = {
  item: string,
  merchant?: string
}

export type TSubmission = {
  id: number,
  meal: string,
  user: string,
  selection: TSelection
  createdAt: string,
  deletedAt?: string
  purchase?: number
}


// Note: a value of null in the item field means the user specifically selected that they 'Do not want' to eat on that particular meal
// Note: a value other than null in the deletedAt field means the user specifically cancelled their selection

export const submissions: TSubmission[] = [
  {
    id: 1,
    meal: 'Monday',
    user: 'Sally',
    selection: {
      item: 'Saturated Fat',
      merchant: 'Little Liquid Lipids'
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: null,
    purchase: 1
  },
  {
    id: 2,
    meal: 'Monday',
    user: 'Sally',
    selection: {
      item: null
    },
    createdAt: '2023-08-25T00:00:00Z',
    deletedAt: null
  },
  {
    id: 3,
    meal: 'Monday',
    user: 'Mark',
    selection: {
      item: 'Veggie Burger',
      merchant: 'Big Burger Buns'
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: null,
    purchase: 1
  },

  {
    id: 4,
    meal: 'Tuesday',
    user: 'Sally',
    selection: {
      item: 'Cheese Burger',
      merchant: 'Big Burger Buns'
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: '2023-08-25T00:00:00Z',
    purchase: 2
  },
  {
    id: 5,
    meal: 'Tuesday',
    user: 'Mark',
    selection: {
      item: 'Whopper',
      merchant: 'Big Burger Buns'
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: null,
    purchase: 2
  },
  {
    id: 6,
    meal: 'Tuesday',
    user: 'Abigail',
    selection: {
      item: 'Whopper',
      merchant: 'Big Burger Buns'
    },
    createdAt: '2023-08-25T00:00:00Z',
    deletedAt: null
  },

  {
    id: 4,
    meal: 'Wednesday',
    user: 'Sally',
    selection: {
      item: 'Hot Soup',
      merchant: 'Medium Minced Minestrone'
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: '2023-08-25T00:00:00Z',
    purchase: 3
  },
  {
    id: 5,
    meal: 'Wednesday',
    user: 'Mark',
    selection: {
      item: 'Hot Soup',
      merchant: 'Medium Minced Minestrone',
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: null,
    purchase: 3
  },
  {
    id: 6,
    meal: 'Wednesday',
    user: 'Mark',
    selection: {
      item: 'Cheese Burger',
      merchant: 'Big Burger Buns',
    },
    createdAt: '2023-08-25T00:00:00Z',
    deletedAt: null
  },
  {
    id: 7,
    meal: 'Thursday',
    user: 'Mark',
    selection: {
      item: 'Cheese Burger',
      merchant: 'Big Burger Buns',
    },
    createdAt: '2023-08-20T00:00:00Z',
    deletedAt: null,
    purchase: 4
  },
  {
    id: 8,
    meal: 'Thursday',
    user: 'Mark',
    selection: {
      item: 'Whopper',
      merchant: 'Big Burger Buns',
    },
    createdAt: '2023-08-24T00:00:00Z',
    deletedAt: null
  },
  {
    id: 9,
    meal: 'Thursday',
    user: 'Mark',
    selection: {
      item: 'Veggie Burger',
      merchant: 'Big Burger Buns',
    },
    createdAt: '2023-08-25T00:00:00Z',
    deletedAt: null
  },
]
