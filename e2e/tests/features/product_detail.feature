Feature: Product Detail
   Background:
    Given the user is on the homepage

  Scenario Outline: View product detail correctly
  When the user selects product "<name>"
  Then product name should be "<name>"
  And product price should be "<price>"
  And product description should contain "<description>"

    Examples:
      | name                  | price                   | description |
      | Samsung galaxy s6     | $360 *includes tax      | The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded. |
      | Nokia lumia 1520      | $820 *includes tax      | The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. |
      | Nexus 6               | $650 *includes tax      | The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM. |
      | Samsung galaxy s7     | $800 *includes tax      | The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card. |