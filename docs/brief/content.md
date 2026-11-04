# Lemon Detox Cleanse — Publish-Ready Site Copy

This is the single source of truth for every word on the website. It replaces the copy from the Manus build.
Australian English throughout (colour, optimise, programme is NOT used — "program" is the house spelling).

Anything in `[[double brackets]]` is a detail only the business owner can confirm. Do not publish a page until its brackets are filled or removed.

---

## 0. House style (apply everywhere)

| Thing | Use this | Never use |
|---|---|---|
| Brand name | **Lemon Detox Cleanse** (logo reads "detox") | Lemon Detox Cleanse Australia, The Lemon Detox, LemonDetox |
| Tagline | **Reset. Refine. Restore.** (matches the box) | Reset · Reduce · Restore |
| Products | **7-Day Focused Cleanse** ($95 AUD) · **14-Day Extended Cleanse** ($159 AUD) | 7 Day Cleanse, 7-Day Pack, 7-Day Reset Box, Standard, Optimum |
| The physical product | **Reset Box** | pack, kit |
| The three ways to follow it | **Full Cleanse** · **Relaxed** · **50/50** | Full Body Cleanse, Relaxed Version, Standard/Optimum |
| The drink | **the Lemon Detox drink** | elixir, formula, tonic |
| Syrup | **Madal Bal® Natural Tree Syrup** (first mention), then "the tree syrup" | organic maple-tree syrup, Premium Organic Tree Syrup |
| Evening tea | **senna herbal tea** | laxative tea (except once, to explain what senna is) |
| Morning step | **salt-water flush** | sea salt water mixture, salt flush |
| Shipping promise | **Free tracked shipping Australia-wide. Express available.** | complimentary express / signature delivery |
| Day ranges | 7–14 days (en dash), "Day 4" capitalised | 7 to 14 days, day four |
| Weights | 6 kg (space) in our copy; customer quotes stay as written | |

Claims rules (keep the site out of trouble with the ACCC, TGA and FSANZ):
- Describe what **participants report**, not what the product **does** to the body. No "detoxifies", "burns fat", "boosts metabolism", "cellular renewal", "autophagy", "reduces inflammation".
- No disease or medical claims in our copy or in testimonials (no medication, immunity, heartburn, constipation, acne, eczema, scarring).
- No science/research page and no study citations.
- Never show a statistic we can't prove (customer counts, % satisfied, star ratings) — see placeholders.
- Testimonials are shown exactly as the customer supplied them. Pull quotes are exact excerpts from the customer's own words.

---

## 1. Global elements

**Announcement bar:** Free tracked shipping Australia-wide · Reset your routine today

**Navigation:** Programs · How It Works · Stories · FAQs · Contact · [Cart]
(Primary button in nav, desktop: **Shop now**)

**Footer**

> Lemon Detox Cleanse
> A structured 7- or 14-day cleanse built around one simple drink.

Columns:
- **Shop** — 7-Day Focused Cleanse · 14-Day Extended Cleanse
- **Learn** — How It Works · Stories · FAQs · Program Guide (PDF)
- **Help** — Contact · Shipping · Returns & Refunds · Privacy · Terms

Footer disclaimer (replace the old US-style "not evaluated by the TGA/FSANZ" text):

> The Lemon Detox Cleanse is a short-term dietary program. It is not intended to diagnose, treat, cure or prevent any disease and is not a substitute for medical advice. It is not suitable for everyone — please read **Who it isn't for** and speak with your doctor before starting, especially if you are pregnant, breastfeeding, under 18, take medication or have a medical condition. Individual results vary.

Legal line: © 2026 Lemon Detox Cleanse · Madal Bal® is a registered trademark of its owner. (Add ABN later.)

---

## 2. Home `/`

**Hero**
- Eyebrow: Lemon Detox Cleanse
- H1: Reset. Refine. *Restore.*
- Sub: A structured 7- or 14-day cleanse built around one simple drink — a defined pause from constant eating, and a clean starting point for better habits.
- Buttons: **Shop the Reset Box** → `/#programs` · **How it works** → `/how-it-works`
- Trust row (small, under buttons): 4 simple ingredients · 7 or 14 days · Free tracked shipping

**Section — Reset behaviour**
- Eyebrow: Reset behaviour
- H2: In a world of constant consumption, take a defined pause.
- Body: Most diets focus on restriction. This program focuses on resetting behaviour. For seven to fourteen days you follow one clear routine and step away from solid food — no calorie counting, no complicated rules. Just clarity and simplicity.

**Section — What changes**
- Eyebrow: What changes
- H2: Every routine benefits from a reset.
- Body: For many people, weight loss follows naturally when solid food is set aside for a short, defined period. Just as importantly, the structure helps re-establish better habits — a strong foundation for keeping results with balanced, mindful choices afterwards.
- Sub-heading: What participants commonly report
  - Stepping away from overeating and constant snacking
  - Greater awareness of eating habits
  - Stronger discipline and self-control
  - Clearer focus
  - Steadier energy after the first few days
  - A clear starting point for longer-term change

**Section — Programs** (`id="programs"`)
- Eyebrow: Choose your program
- H2: Two programs. One simple routine.
- Card 1 — **7-Day Focused Cleanse** — $95 AUD
  - For first-timers or a quick reset.
  - Includes enough tree syrup for 7 Full Cleanse days (or 9 days on 50/50).
  - Button: **Add to cart** · link: View details
- Card 2 — badge **Most popular** — **14-Day Extended Cleanse** — $159 AUD
  - For a deeper reset and returning cleansers. Best value per day.
  - Includes enough tree syrup for 14 Full Cleanse days (or 18 days on 50/50).
  - Button: **Add to cart** · link: View details
- Under cards: Free tracked shipping Australia-wide · Secure checkout · 14-day returns on unopened boxes

**Section — Stories (preview)**
- Eyebrow: Stories from the cleanse
- H2: Real people. Real resets.
- Four cards (exact excerpts — see `testimonials.json`, `featured: true`):
  - Nick Bilbija, Personal Trainer, Sydney
  - Kate Winton, South Australia
  - Ashley Day, Sydney
  - Geri Graham, Point Cook, VIC
- Small print: Individual results vary.
- Button: **Read all stories** → `/stories`

**Section — Program Guide** (ONE guide block only — the old site had two)
- Eyebrow: Free program guide
- H2: Everything you need to know before you start.
- Body: A 12-page guide covering why people choose a reset, the four ingredients, daily mixing measures, the daily routine, the three ways to follow the program, who it isn't for and how to come off the cleanse.
- Button: **Download the guide (PDF)**
- Meta: PDF · 12 pages

**Section — After**
- Eyebrow: After Day 7
- H2: Lighter. Calmer. Yours.
- Body: Most people describe the same thing — feeling lighter, more focused and back in control, with a clean baseline to build on.

**Closing CTA**
- H2: Begin your reset.
- Body: A simple, structured plan that resets your relationship with food.
- Buttons: **Shop the Reset Box** · **How it works**

---

## 3. How It Works `/how-it-works`

**Hero**
- Eyebrow: The program
- H1: How the Lemon Detox Cleanse works.
- Body: For a defined window — seven days, or up to fourteen — solid food is set aside in favour of one simple routine built around the Lemon Detox drink. The principle is simple: simplify what you take in, create a deliberate pause from constant eating, and come out the other side with a clean starting point.
- Buttons: **Shop the Reset Box** · **See a typical day** (anchor)

In-page nav: Why · A typical day · The drink · Mixing · Morning & evening · Three ways · Before you start · After the cleanse

**01 · Why a reset**
- H2: Why people choose the Lemon Detox Cleanse.
- Body: Modern life is fast, demanding and often excessive. Convenience food, constant snacking and stretched schedules leave little room for awareness or balance, and many people end up feeling heavy, unfocused and out of rhythm.
  The Lemon Detox Cleanse provides a structured pause. By temporarily replacing solid food with a simple liquid routine, it removes hundreds of small food decisions from your day and gives you a clear reset point.
  The value of the program isn't in extremes — it's in structure, consistency and intention.

**02 · A typical day**
- H2: A typical day on the cleanse.
- I · Morning — **Start with the salt-water flush.** Drink the salt-water flush on an empty stomach, or a cup of senna herbal tea if you prefer. Then mix the day's Lemon Detox drink — or have it ready from the night before.
- II · Through the day — **Sip steadily.** Have a glass whenever you feel hungry — usually six to nine glasses a day. Drink plain water in between.
- III · Evening — **Senna tea, then rest.** When the day's drink is finished, have a cup of senna herbal tea before bed and get a good night's sleep.
- Footer line: The routine quickly becomes simple and repetitive — leaving you free to focus on rest, hydration and seeing it through.

**03 · The drink**
- H2: What's in the Lemon Detox drink.
- Intro: Four simple ingredients. During the cleanse the drink replaces your regular meals, supplying natural sugars and hydration so you can keep up your normal day.
- Ingredient cards (exactly four — the old site wrongly listed senna as a drink ingredient):
  1. **Madal Bal® Natural Tree Syrup** — A blend of maple and palm syrups. The energy source of the drink. *(Included in your Reset Box.)*
  2. **Fresh lemon juice** — Always freshly squeezed, never bottled. Adds vitamin C and the bright, clean taste.
  3. **Cayenne pepper** — Just a pinch, for warmth.
  4. **Water** — Fresh or filtered, to make it drinkable through the day.
- Side note card: **Also in your Reset Box: senna herbal tea** for the evening routine, and sea salt for the morning flush.

**04 · Mixing**
- H2: Daily mixing measures.
- Intro: Two ways to make the same drink. The daily batch is easiest; the single glass is handy when travelling.
- **Daily batch (recommended)** — makes about 2 litres
  1. 140 ml Madal Bal® Natural Tree Syrup
  2. 140 ml freshly squeezed lemon juice (about 3½ lemons)
  3. 2–3 pinches cayenne pepper
  4. Water to make up to 2 litres (about 1.7 litres)
- **Single glass**
  1. 20 ml Madal Bal® Natural Tree Syrup (1 Australian tablespoon)
  2. 20 ml freshly squeezed lemon juice (about ½ lemon)
  3. A small pinch of cayenne pepper
  4. At least 250 ml water
- Notes: Stir or shake before each glass. Enjoy cold, at room temperature or warm — never boiled. Once opened, keep the tree syrup in the fridge.

**05 · Morning & evening**
- H2: The two routines that make it easier.
- **Morning · Salt-water flush** — Dissolve 2 level teaspoons of natural, uniodised sea salt in 1 litre of warm water and drink it on an empty stomach. Not suitable if you have high blood pressure, heart or kidney conditions — use senna tea instead. If you can't finish it, don't force it.
- **Evening · Senna herbal tea** — A plant-based herbal laxative tea taken before bed. Use as directed on the packet and only for the duration of the cleanse.
- Also: Drink 1–2 litres of plain water a day on top of the Lemon Detox drink. Gentle walking and stretching are a good complement; save hard training for afterwards.

**06 · Three ways**
- H2: Choose the way that suits you.
- Intro: Both programs can be followed three ways. Pick the one that fits your week and your experience.
- **Full Cleanse** — badge *Deepest reset*
  - Every meal is replaced with the Lemon Detox drink.
  - Breakfast · 2–3 glasses / Lunch · 2–3 glasses / Dinner · 2–3 glasses
  - 7-Day box: 7 days · 14-Day box: 14 days
- **Relaxed** — badge *Most flexible*
  - Breakfast and dinner are replaced with the drink; lunch is a light, healthy meal (vegetables, salad, lean protein — no processed food, alcohol or sugar).
  - Breakfast · 2–3 glasses / Lunch · light meal / Dinner · 2–3 glasses
  - Best followed for at least 10–14 days.
- **50/50** — badge *Ease in, ease out*
  - Days 1–3 Relaxed · Days 4–6 Full Cleanse · Days 7–9 Relaxed (14-Day box: double each stage)
  - 7-Day box: about 9 days · 14-Day box: about 18 days
- Buttons: **Shop 7-Day** · **Shop 14-Day**

**07 · Why Full Cleanse goes deepest** (short)
- H2: Why the Full Cleanse gives the deepest reset.
- Body: The Lemon Detox Cleanse isn't a water fast — the drink provides liquid nourishment and steady energy throughout the day. But the more completely you step away from solid food, the bigger the break from old eating patterns. That's why the Full Cleanse gives the most complete reset, while Relaxed and 50/50 are excellent, gentler options — especially for first-timers.

**08 · Before you start** (NEW — required)
- H2: Who it isn't for.
- Body: The Lemon Detox Cleanse is not suitable if you are:
  - pregnant or breastfeeding
  - under 18
  - living with diabetes, heart, kidney or liver disease, or high or low blood pressure
  - recovering from surgery or illness
  - living with, or have a history of, an eating disorder
  - taking prescription medication (check with your doctor first)
- Note: If you feel faint, dizzy, unwell or have heart palpitations at any stage, stop and eat normally, and seek medical advice if symptoms continue. Mild headaches and tiredness in the first two days are common, particularly if you usually drink coffee.

**09 · After the cleanse** (NEW — the old guide promised this but never covered it)
- H2: Coming off the cleanse.
- Body: Ease back into food over two or three days rather than going straight back to your usual meals.
  - **Day 1 after:** fresh juices and vegetable soup or broth.
  - **Day 2 after:** add fruit, salads and steamed vegetables.
  - **Day 3 onward:** reintroduce lean protein and whole grains, then your normal balanced diet.
  Keep the habits you built — regular water, smaller portions, less processed food — and your reset keeps working for you.

**Closing CTA:** One pause, taken with intention, can change a season. **Shop the Reset Box** · **Read the stories**

---

## 4. Product — 7-Day Focused Cleanse `/products/7-day-focused-cleanse`

- Eyebrow: 7-day program
- H1: 7-Day Focused Cleanse
- Price: $95 AUD · Free tracked shipping
- Body: Seven structured days for a fast, focused reset. Ideal if it's your first cleanse, or if you want a defined week to step away from snacking and overeating and start again with clear habits.
- **In the box**
  - Madal Bal® Natural Tree Syrup, 1 litre [[confirm size]]
  - Senna herbal tea [[confirm quantity, e.g. 7 serves]]
  - Natural sea salt for the morning flush [[confirm]]
  - Printed program guide
- **Why 7 days**
  - A clear, achievable timeframe
  - Enough time to break the snacking cycle
  - Most people feel the routine settle by Day 3 or 4
  - The ideal introduction to cleansing
- You'll also need: fresh lemons (about 25), cayenne pepper, water.
- Button: **Add to cart** · link: How it works
- Accordion: Shipping · Returns · Who it isn't for

## 5. Product — 14-Day Extended Cleanse `/products/14-day-extended-cleanse`

- Badge: Most popular
- Eyebrow: 14-day program
- H1: 14-Day Extended Cleanse
- Price: $159 AUD · Free tracked shipping
- Body: Our most complete program. Two weeks gives you time to settle fully into the routine and to build habits that last — ideal for returning cleansers, or anyone committed to a bigger change.
- **In the box**
  - Madal Bal® Natural Tree Syrup, 2 × 1 litre [[confirm]]
  - Senna herbal tea [[confirm quantity]]
  - Natural sea salt for the morning flush [[confirm]]
  - Printed program guide
- **Why 14 days**
  - More time to settle into the routine
  - A longer break from old eating patterns
  - Room to try the Relaxed or 50/50 approach over 2–3 weeks
  - The strongest foundation for long-term habits
- Body 2: Many people say the second week is where it clicks — the routine feels effortless, energy feels steady, and the pull back to old habits is noticeably weaker.
- You'll also need: fresh lemons (about 50), cayenne pepper, water.
- Button: **Add to cart** · link: How it works

(Remove from old pages: "maximum cellular renewal and autophagy", "by Day 8 your body enters an extended state of autophagy", "where the real magic happens", "rapid weight loss", "metabolic refresh", "Complimentary Express Delivery".)

---

## 6. Stories `/stories`  (replaces `/testimonials`)

- Eyebrow: Stories from the cleanse
- H1: Real people. Real resets.
- Intro: Stories from Lemon Detox Cleanse customers, shared in their own words and grouped by what they came for.
  *(Removed: "lightly edited for length and never fabricated" and "Australian resets since 2008".)*
- Filter tabs: All · Weight & shape · Energy & clarity · Lighter & less bloated · Skin & glow · Lifestyle
- Cards: from `testimonials.json`. Big pull quote (exact excerpt) → full story → name, role, location → optional result chip.
- Under the grid, small print: These are individual experiences shared by customers. Results vary from person to person and depend on how the program is followed and what you eat afterwards. The Lemon Detox Cleanse is not intended to diagnose, treat, cure or prevent any disease.
- Stats band — DELETE "12,000+ customers since 2008", "92% report meaningful results", "4.8 / 5 average rating" unless the owner can prove them with records. Default replacement:
  - 4 · simple ingredients
  - 7–14 · days, your choice
  - Free · tracked shipping Australia-wide
- Closing CTA: Your reset story is next. **Shop the Reset Box** · How it works
  *(Old line "Australia's premium 7-day metabolic reset" removed — there are 7- and 14-day programs, and "metabolic" is a claim.)*
- Share-your-story line: Finished your cleanse? We'd love to hear how it went — **Share your story** → contact form.

---

## 7. FAQs `/faqs`

- Eyebrow: FAQs
- H1: Everything you've wondered about the cleanse.
- Intro: Straight answers to the questions we're asked most.

**Getting started**

**How long should I do the cleanse for?**
Most people do 7 to 14 days. We don't recommend fewer than five days — it usually takes the first two or three days to settle into the routine. The 7-Day Focused Cleanse suits first-timers; the 14-Day Extended Cleanse is for a deeper reset.

**Which way should I follow it — Full Cleanse, Relaxed or 50/50?**
Full Cleanse gives the deepest reset. Relaxed keeps one light meal a day and suits busy weeks. 50/50 eases you in and out. See *How It Works* for the details.

**What do I need to buy as well as the Reset Box?**
Fresh lemons (about 25 for 7 days), cayenne pepper and water. Everything else is in the box.

**How do I prepare the drink?**
Full measures for a daily 2-litre batch and a single glass are on the *How It Works* page and in the Program Guide.

**During the cleanse**

**Will I be hungry?**
Some hunger on Days 1–2 is normal. Have a glass of the drink whenever you feel hungry — most people have six to nine glasses a day. Many say hunger eases noticeably by Day 3.

**Do I have to do the salt-water flush?**
No. If you don't like it — or if you have high blood pressure, heart or kidney conditions — use a cup of senna herbal tea in the morning instead.

**Can I drink anything else?**
Plain water (1–2 litres a day), and herbal teas such as peppermint, chamomile or rosehip. If you want sweetness, use a little tree syrup only. Avoid dairy, alcohol and soft drinks.

**What about coffee?**
We recommend cutting back gradually in the week before you start, as headaches on Days 1–2 are common for regular coffee drinkers.

**Can I exercise?**
Yes — gently. Walking, stretching and light yoga are fine. Avoid intense or long training sessions during the cleanse and return to your usual routine afterwards.

**Is lemon juice too acidic on an empty stomach?**
The drink is diluted, and most people find it comfortable. If you have reflux or a sensitive stomach, check with your doctor before starting.

**Afterwards**

**How do I come off the cleanse?**
Ease back in over two or three days: juices and vegetable soup first, then fruit, salads and vegetables, then lean protein and whole grains.

**Will the weight come back?**
That depends on what you do next. Many people find the cleanse breaks old eating patterns and makes it easier to keep up healthier habits afterwards. If you go straight back to your old routine, expect some weight to return.

**How often can I repeat it?**
Many people do the cleanse once or twice a year. Leave at least 4 weeks between full programs.

**Safety**

**Who shouldn't do the cleanse?**
Anyone pregnant or breastfeeding, under 18, living with diabetes, heart, kidney or liver disease, high or low blood pressure, with a history of eating disorders, recovering from surgery or illness, or taking prescription medication without their doctor's approval.

**I take medication. Can I do it?**
Please speak with your doctor before starting. A big change in food intake can affect how some medications work.

**What if I feel unwell?**
Mild headaches and tiredness early on are common. If you feel faint, dizzy, or have palpitations or anything that worries you, stop the cleanse, eat normally and seek medical advice.

**Orders**

**How long does shipping take?** See *Shipping* — [[x–y]] business days for most of Australia, free tracked shipping on every order.

**Can I return my Reset Box?** Unopened boxes can be returned within 14 days. See *Returns & Refunds*.

Closing block:
- H2: Still have a question?
- Body: Our team usually replies within one business day.
- Buttons: **Contact us** · **How it works**

*(Removed from old FAQs: "toxins reabsorbed", tongue-coating test, toxins in breast milk, "lemons are alkalising", and the advice to drink black coffee for low blood pressure — these are unsupported or medical advice.)*

---

## 8. Contact `/contact`

- Eyebrow: Contact
- H1: We're here to help.
- Intro: Questions about the program or your order? Send us a message and we'll reply within one business day.
- No email address, phone number or street address is shown for now — the form is the only contact method. (Add real details later via the site config.)
- Form fields: Name · Email · Order number (optional) · Topic (Order / Program question / Other) · Message · **Send message**
- Success: Thanks — we've got your message and will be in touch within one business day.

---

## 9. Shipping `/shipping`

- H1: Shipping & delivery
- Free tracked standard shipping on every order within Australia.
- Orders are dispatched within [[1]] business day (Monday–Friday, excluding public holidays).
- Estimated standard delivery after dispatch: [[confirm with your carrier]]
  - Metro areas: [[2–5]] business days
  - Regional areas: [[4–8]] business days
  - WA, NT and TAS: [[5–10]] business days
- Express shipping: [[$15]] at checkout, [[1–3]] business days to most metro areas.
- You'll receive a tracking link by email as soon as your order ships.
- We currently ship within Australia only.

## 10. Returns & refunds `/returns`

- H1: Returns & refunds
- **Change of mind:** We accept change-of-mind returns within 14 days of delivery if the Reset Box is unopened and sealed. Because it contains food products, we can't accept change-of-mind returns on opened boxes. Return postage for change-of-mind returns is at your cost.
- **Damaged, faulty or incorrect items:** If your order arrives damaged, faulty or incorrect, contact us within [[7]] days with your order number and a photo and we'll replace it or refund you.
- **Your rights:** Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. Nothing in this policy limits those rights.
- **How to start a return:** Send us a message through the contact page with your order number.

## 11. Privacy `/privacy`  — full policy required (old page was two sentences)

Must cover, in plain English, under the Privacy Act 1988 (Cth) and the Australian Privacy Principles:
1. Who we are — [[business name, ABN, contact]].
2. What we collect — name, email, phone, delivery address, order history, messages you send us; payment details are handled by [[Shopify/Stripe]] and never stored by us.
3. How we collect it — orders, contact form, guide download / newsletter sign-up, cookies and analytics ([[name the analytics tool]]).
4. Why — to fulfil orders, provide support, send emails you've opted into, improve the site.
5. Who we share it with — payment processor, delivery carrier, email platform [[name]], hosting/analytics providers; some may store data overseas [[countries]].
6. Marketing — only with consent; unsubscribe any time.
7. Access, correction and complaints — how to request; escalation to the OAIC (oaic.gov.au).
8. Security and retention.
9. Updates — "Last updated [[date]]".

## 12. Terms `/terms`

Must cover: who we are; use of the site; product information and the health disclaimer (same wording as the footer); pricing in AUD incl. GST [[confirm GST registration]]; orders and acceptance; payment; shipping and returns (link to those pages); Australian Consumer Law statement; intellectual property; limitation of liability (subject to the ACL); governing law — [[state]], Australia; contact.

---

## 13. Program Guide download

- No fake email gate. Either link straight to the PDF, or (if an email platform is connected) ask for an email with a clear "Send me the guide" button and an opt-in tick box for marketing. Never pretend to collect an email that isn't stored.
- File name: `Lemon-Detox-Cleanse-Program-Guide.pdf`.

---

## 14. SEO

| Page | Title | Meta description |
|---|---|---|
| Home | Lemon Detox Cleanse — 7 & 14-Day Reset Box | A structured 7- or 14-day cleanse built around one simple drink. Free tracked shipping Australia-wide. |
| How It Works | How It Works — Lemon Detox Cleanse | The daily routine, mixing measures and three ways to follow the Lemon Detox Cleanse. |
| 7-Day | 7-Day Focused Cleanse — Lemon Detox Cleanse | Seven structured days for a focused reset. $95 with free tracked shipping. |
| 14-Day | 14-Day Extended Cleanse — Lemon Detox Cleanse | Our most complete program. $159 with free tracked shipping. |
| Stories | Customer Stories — Lemon Detox Cleanse | Lemon Detox Cleanse customers share their experiences in their own words. |
| FAQs | FAQs — Lemon Detox Cleanse | Answers on hunger, coffee, exercise, safety, shipping and more. |
| Contact | Contact — Lemon Detox Cleanse | Questions about your order or the program? Get in touch. |

Redirects from old URLs: `/why-it-works` → `/how-it-works`, `/stockists` → `/`, `/testimonials` → `/stories`, `/products/7-day-focused` → `/products/7-day-focused-cleanse`, `/products/14-day-extended` → `/products/14-day-extended-cleanse`.
