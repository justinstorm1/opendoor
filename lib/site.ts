export const site = {
  name: "Freehold Area Open Door",
  shortName: "Open Door",
  tagline: "Serving our community since 1987",
  url: "https://www.faopendoor.org",
  address: {
    street: "80 Throckmorton Street",
    city: "Freehold",
    state: "NJ",
    zip: "07728",
  },
  phone: "732-780-1089",
  phoneHref: "tel:+17327801089",
  email: "info@faopendoor.org",
  hours: {
    days: "Monday – Thursday",
    shortDays: "Mon – Thu",
    time: "10:30 am – 2:30 pm",
  },
  links: {
    donate: "https://www.paypal.com/donate/?hosted_button_id=X3CZGLW8HF3Z4",
    volunteerForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSdAzKrtgJdNaOSxeOZmf5yHcb-7LKFcvpIcKvC02kwgGhkHzQ/viewform",
    newsletter: "https://freeholdareaopendoor.substack.com",
    annualReport: "https://simplebooklet.com/faod2025annualreport",
    form990:
      "https://www.faopendoor.org/_files/ugd/793c28_b0a17650c1d0476ca04852392a7b2dad.pdf",
    greatNonprofits:
      "https://greatnonprofits.org/org/freehold-area-open-door-inc",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=80+Throckmorton+St,+Freehold,+NJ+07728",
    mapEmbed:
      "https://www.google.com/maps?q=80+Throckmorton+St,+Freehold,+NJ+07728&output=embed",
  },
} as const

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`

export const nav = [
  { href: "/get-help", label: "Get Help" },
  { href: "/give", label: "Ways to Give" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const

export const serviceArea = [
  "Freehold Borough",
  "Freehold Township",
  "Allentown",
  "Clarksburg",
  "Colts Neck",
  "Cream Ridge",
  "Marlboro",
  "Morganville",
  "Millstone",
  "Roosevelt",
  "Upper Freehold",
]

export const mostNeeded = {
  "Pantry staples": [
    "Pancake mix & syrup",
    "Oatmeal",
    "Grits",
    "Egg noodles",
    "Bagged flour",
    "Bagged sugar",
    "Bread crumbs",
    "Cake mix",
    "Jello & pudding",
    "Granola bars",
  ],
  "Condiments & seasonings": [
    "Salt & pepper sets",
    "Salad dressing",
    "Ketchup",
    "Mayonnaise",
    "Mustard",
    "BBQ sauce",
    "Vinegar",
  ],
  "Canned protein & drinks": [
    "Canned chicken",
    "Canned beef stew",
    "Sardines",
    "Spam",
    "Ground coffee",
    "Tea",
    "Juice boxes & pouches",
  ],
  "Household & personal care": [
    "Dish soap",
    "Laundry soap",
    "Bar soap",
    "Shampoo",
    "Tissues",
  ],
} as const
