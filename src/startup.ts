import { processAnyAwaitingMealPurchaseUpdates } from './services/meals'
import debounce from './services/debounce'
async function main() {
  try {
    console.log('START')

    const currentDateTime = new Date('2023-08-26T00:00:00Z')
    await processAnyAwaitingMealPurchaseUpdates(currentDateTime)
    

    console.log('FINISH')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}




export default main()
