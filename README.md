# Free Games Hunter

**Free Games Hunter** is an experimental automation tool designed to fetch currently available free games from the Epic Games Store. It uses [Playwright](https://playwright.dev/) for browser automation, allowing users to log in via a real browser GUI, store login cookies, and then programmatically retrieve details of free game promotions.

> **Note:** This project is untested due to platform limitations and is released for educational purposes only. It has not been verified in a production environment.

---

## Features

- Automates Epic Games Store login via Playwright GUI
- Automatically stores authentication cookies in JSON format
- Fetches a list of currently free games from the store
- Built using Node.js and Bash for flexibility
- Open-source and customizable

---

## Requirements

- Node.js (v16 or later)
- Playwright (installed via `npm install`)
- Bash (for running the shell script)
- A desktop OS (Playwright does not support Android/Termux)

---

## Usage

1. **Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/free-games-hunter.git
cd free-games-hunter

2. Install Dependencies



npm install

3. Run the Script



bash free-games-hunter.sh

If no cookies are found, it will open a browser for you to log into Epic Games.

Once login is successful, it saves the cookies and fetches available free games.



---

Note on Testing

This project has not been tested due to platform restrictions (e.g., Playwright not supporting Android). It is uploaded as-is for contribution, feedback, and educational exploration.


---

License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with attribution.


---

Disclaimer

This tool is not affiliated with or endorsed by Epic Games. Use it responsibly and ensure you follow their terms of service.




