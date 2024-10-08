from app import app
from models import db, User, Cigar, Bundle, Subscription
from faker import Faker

fake = Faker()


if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')
        User.query.delete()
        Cigar.query.delete()
        Bundle.query.delete()
        Subscription.query.delete()

        
        
        print("Seeding Cigars")

        cigars = [
            Cigar(
                name = "New World Cameroon",
                brand = "AJ Fernandez",
                size = "Torpedo 6.5x52",
                strength = "Medium Body",
                flavor = "Sweet, spicy notes perfectly balanced by the African leaf.",
                cig_pic = ""
            ),
            Cigar(
                name = "New World Dorado",
                brand = "AJ Fernandez",
                size = "Toro 6.0x54",
                strength = "Medium to Full Body",
                flavor = "Notes of earth, pepper, leather.",
                cig_pic = ""
            ),
            Cigar(
                name = "New World Connecticut",
                brand = "AJ Fernandez",
                size = "Toro 6.0x52",
                strength = "Mellow to Medium Body",
                flavor = "Subtle notes of cream, slight spice, and cedar.",
                cig_pic = ""
            ),
            Cigar(
                name = "Serie Aniversario",
                brand = "God of Fire",
                size = "60 Salomon 5.5x60",
                strength = "Mellow to Medium Body",
                flavor = "Subtle notes of nuts, and cream.",
                cig_pic = "https://images.squarespace-cdn.com/content/v1/5d3daa4a17aa5f0001719b33/1565154893540-IE9D2A0I9H8HB6YWZPXL/_MG_6065+-+fix.jpg?format=2500w"
            ),
            Cigar(
                name = "Opus X Lost City",
                brand = "Fuente Fuente",
                size = "Double Robusto 5.7x52",
                strength = "Full Body",
                flavor = "Notes of cream, cedar, caramel, and almonds.",
                cig_pic = ""
            ),
            Cigar(
                name = "Edicion de Aniversario",
                brand = "Don Carlos",
                size = "Toro 6.2x48",
                strength = "Medium Body",
                flavor = "Notes of pepper spice, leather, and cedar.",
                cig_pic = ""
            ),
            Cigar(
                name = "Pledge",
                brand = "E.P. Carrillo",
                size = "Sojourn (Toro) 6.0x52",
                strength = "Medium to Full Body",
                flavor = "Notes of cream, cedar, leather, earth, bread, peanut and espresso.",
                cig_pic = ""
            ),
            Cigar(
                name = "Julius Caesar",
                brand = "Diamond Crown ",
                size = "Churchill 7.2”x52",
                strength = "Medium to Full Body",
                flavor = "Notes of coffee, sweetness, spice, and wood.",
                cig_pic = ""
            ),
            Cigar(
                name = "Serie V Melanio",
                brand = "Oliva",
                size = "Churchill 7.0”x50",
                strength = "Full Body",
                flavor = "Notes of black pepper, cocoa, coffee, caramel, leather.",
                cig_pic = ""
            )
        ]
        
        db.session.add_all(cigars)

        
        
        print("Seeding Bundles")

        bundles = [
            Bundle(
                name = "AJ Fernandez Selections",
                price = "39.99",
                cigars = 1
            ),
            Bundle(
                name = "Arturo Fuente Selections",
                price = "49.99",
                cigars = 4
            ),
            Bundle(
                name = "Editor's Picks",
                price = "29.99",
                cigars = 6
            ),
            Bundle(
                name = "Custom Bundle",
                price = "39.99",
                cigars = 8
            )
        ]

        db.session.add_all(bundles)

        db.session.commit()
        print('Seeding Complete')