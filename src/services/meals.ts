import { purchases } from '../data/purchases'
import { submissions } from '../data/submissions'
import { merchants } from '../data/merchants'
import type { TPurchase } from '../data/purchases'
import type { TMerchant } from '../data/merchants'
import type { TSubmission } from '../data/submissions'

export async function processAnyAwaitingMealPurchaseUpdates(currentDateTime: Date) {
  // You don't need to do anything with this function, I simply provided it to assist with context/framing
  const purchases = await getUpcomingLunchMealPurchases(currentDateTime)
  for (const purchase of purchases) {
    const allSubmissions = await getAllSubmissions()
    const allMerchants = await getAllMerchants()
    const shouldUpdate = await shouldUpdateGoThrough(purchase, allSubmissions, allMerchants, currentDateTime)
    console.log(shouldUpdate);
    if (shouldUpdate) {
      const submissionsInUpdate = await retrieveSubmissionsInUpdate(purchase, submissions, allMerchants, currentDateTime)
      await createNewVersionOfPurchaseWithSubmissions(purchase, submissionsInUpdate, currentDateTime)
    }
  }
}

async function getUpcomingLunchMealPurchases(currentDateTime: Date): Promise<TPurchase[]> {
  // This would probably hit a database in the real world
  return purchases.filter(p => !!p.meal && currentDateTime < new Date(p.serviceAt))
}
async function getAllSubmissions(): Promise<TSubmission[]> {
  // This would probably hit a database in the real world
  return submissions
}
async function getAllMerchants(): Promise<TMerchant[]> {
  // This would probably hit a database in the real world
  return merchants
}

async function shouldUpdateGoThrough(purchase: TPurchase, allSubmissions: TSubmission[], allMerchants: TMerchant[], currentDateTime: Date): Promise<boolean> {
  // TODO: implement or consider how this might be implemented
  // ...
  //Each user can only have a single submission in a Purchase
  //If a merchant is not accepting updates, prevent any updates to their submissions (but it's still okay for the Purchase to be updated if the changes only impact other merchants)

  let meal_id = purchase.meal;
  console.log(meal_id);
  let segments = purchase.segments;
  let subs_ = submissions.filter(s => s.meal === meal_id && s.selection.item !== null);

  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i];
    let merchants_ = allMerchants.filter(m => m.name === segment.merchant);
    let merchant = merchants_[0];
   
    if (merchant.acceptUpdates === false) {
      //console.log(merchant)
      let subs = subs_.filter(s => s.selection.merchant === segment.merchant);
      for (let j = 0; j < subs.length; j++) {
        let sub = subs[j];
        console.log(sub)

        if (sub.deletedAt !== null ) {
          return true;
        }
      }
    }
  }
  
  let user_ids = new Set();
  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i];
    let items = segment.items;
    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      user_ids.add(item.user);
    }
  }

  const hasDuplicate = [];
  for (let i =0; i< subs_.length; i ++) {
      hasDuplicate.push(subs_[i].user);
    }
  
  if (hasDuplicate.length !== user_ids.size) {
    return true;
  }
  
  return false;
}

async function retrieveSubmissionsInUpdate(purchase: TPurchase, allSubmissions: TSubmission[], allMerchants: TMerchant[], currentDateTime: Date): Promise<any[]> {
  // TODO: implement or consider how this might be implemented
  // ...
  let meal_id = purchase.meal;
  let segments = purchase.segments;
  return submissions.filter(s => s.meal === meal_id && s.selection.item !== null);
}

async function createNewVersionOfPurchaseWithSubmissions(purchase: TPurchase, submissions: TSubmission[], currentDateTime: Date): Promise<void> {
  // You don't need to do anything with this function, I simply provided it to assist with context/framing
  // but the submissions received here would ideally be a final list of submissions that should be copied into the newest version of a purchase
  //
  // It'd probably do something like:
  // 1. transform submissions into a form suitable for the Purchase
  // 2. create and save the Purchase in the database
  // 3. update any other data that might assist with future queries
  //    (e.g. whether the Meal should reference the Purchase and/or
  //    the Submissions should reference anything)


}
