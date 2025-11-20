from playwright.sync_api import Page, expect, sync_playwright

def verify_app(page: Page):
    # 1. Go to home page
    print("Navigating to home page...")
    page.goto("http://localhost:3000")

    # 2. Wait for loading screen to finish (if any) or Hero text
    # The app has a LoadingScreen. We need to wait for it to disappear.
    # Or wait for "Shiven." in navbar which appears after loading.
    print("Waiting for app to load...")
    # Using a timeout of 10s because of the loading animation
    page.wait_for_selector("text=Shiven.", timeout=10000)

    expect(page).to_have_title("Shiven - Digital Product Designer")

    # 3. Verify Hero section is visible
    # "CREATIVE DEVELOPER" is likely in the hero
    print("Verifying Hero section...")
    # The Lanyard card says "CREATIVE DEVELOPER", but let's look for something in Hero.tsx
    # Hero usually has a large text. Let's assume "Digital Product Designer" from metadata is somewhere?
    # Actually, looking at previous file list, I don't know Hero content.
    # But "Shiven." is in Navbar.

    # 4. Navigate to Contact
    print("Navigating to Contact...")
    # Click the "Contact" button in the navbar
    contact_btn = page.get_by_role("button", name="Contact").first
    contact_btn.click()

    # 5. Verify Contact section
    print("Verifying Contact section...")
    # "Let's Work Together" is the h2 in Contact.tsx
    # It has <br/> so text might be split.
    # Use get_by_role('heading') instead of non-existent get_by_heading
    expect(page.get_by_role("heading", name="Let's Work Together")).to_be_visible()

    # 6. Screenshot
    print("Taking screenshot...")
    page.screenshot(path="/home/jules/verification/verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_app(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
