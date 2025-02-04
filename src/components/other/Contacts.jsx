function Contacts() {
    return (
        <div className="contacts">
            <h1>Наши контакты:</h1>
            <ul>
                <li className="adress">
                    Казахстан, г. Костанай, ул. Кобыланды Батыра, 3
                </li>
                <li className="pointer">+7 777 777 77 77</li>
                <li className="pointer">+7 888 888 88 88</li>
                <li className="pointer">+7 787 787 87 87</li>
                <li className="pointer">kpvk.it@gmail.com</li>
            </ul>
            <div className="map">
                <p>Мы на карте:</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.9113506549895!2d63.663020064699985!3d53.235834933074784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43cc8a0370379e83%3A0xd34a789dbdf76cdf!2sProspekt%20Koblandy%20Batyra%203%2C%20Kostanay%20110000!5e0!3m2!1sen!2skz!4v1738675298389!5m2!1sen!2skz"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Contacts;
