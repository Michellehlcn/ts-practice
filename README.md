# Hampr's Propitious Productive Picnic Platter Preparation Picker

## Context

One of the tools Hampr provides to Workplaces enables individual staff members to submit selections for lunch meals.

The goal of this tool is to provide both:
a. flexibility to meet staff cuisine/dietary preferences; and
b. reduce the communication overhead required to collect preferences from each team member.

The system is initially configured by a Workplace Organiser:

1. The Organiser selects one (or more) merchant(s) for each day of the week.
2. Staff members at the Workplace then have the option to select from a range of menu items, offered by the chosen merchant(s), for each particular day.
3. At the last possible moment (based on merchant preferences), Hampr's system will automatically create a Purchase containing all selected menu items. Each merchant in the Purchase will then receive a notification indicating that a Purchase has been placed and they will need to service the contents.

## Proposed Enhancement

We'd like to offer Workplaces even more flexibility, by giving staff the option to change their mind, both before and after, a Purchase is placed.

By 'change their mind', we mean that we want staff to be able to change their selection from one menu item to another; or even to cancel their selection altogether.

We've spoken to all the merchants on the platform, and asked them to provide us with information about their required notice periods for accepting Purchase updates; the last possible moment which Hampr should allow customers to make changes to Purchases that have already been placed (you'll find this in the `data/merchants.ts` file represented as `updateLeadTimeExpiresAt`).

Some merchant's don't want to allow any further updates after the initial Purchase is placed, but most are open to it (you'll find this is the `data/merchants.ts` file represented as `acceptUpdates`).

## Mission

Your mission is to help us design an algorithm to support identifying when Purchase updates should be made and collating submissions that should be contained in the updated Purchase version.

To assist you, we've provided some sample data (see `data/merchants.ts`, `data/purchases.ts` and `data/submissions.ts`).

We've stubbed out a few functions (see the `shouldUpdateGoThrough` and `retrieveSubmissionsInUpdate` functions inside the `services/meals.ts` file), that you can either use to directly code a solution, or simply act as a guide to frame a proposed solution around (whether you want to write some psuedo-code or simply talk through your approach, either is fine).

Below you'll find a list of rules that the system should conform with.

## Rules

1. A Purchase may have multiple merchants in it
2. Each user can only have a single submission in a Purchase
3. If a merchant is not accepting updates, prevent any updates to their submissions (but it's still okay for the Purchase to be updated if the changes only impact other merchants)
4. See the top of the `data/submissions.ts` file for some additional information about how to interpret the submission data structure

## Some notes about the general data structure currently used by Hampr

- the Hampr system records each action/submission performed/sent by team members (kind of like an event-log)
- note when a submission is deleted, the original is entity updated (rather than a new entity being created)
- when purchases are created they are effectively snapshots (from a point-in-time) and contain (copies of) all necessary data for a supplier to service
- note when a purchase is updated (as in a new version), the original purchase entity is adjusted
- when a purchase is created, a reference to the purchase is currently added to the submission

## Additional Notes

When preparing a solution, feel free to consider/propose adjustments to the data (e.g. are there additional fields that could be stored or adjustments to the design) that might assist the calculation(s) and/or simplify things.

We're interested in your thought-process, how you break the problem down and what avenues/trade-offs you consider.

You can either choose to:

- write a little bit of code
- write a lot of code
- write some psuedo-code
- write some notes
- write nothing, and simply talk through your ideas when we catch-up to discuss later

I'm flexible as either way, we'll get together to discuss things after you've had a look.

