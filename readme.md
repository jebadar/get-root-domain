# URL Root Domain Extractor

This repository contains a simple script to extract the hostname and domain of a given URL and return it in a structured JSON format.

## Installation

No installation is required. Simply clone the repository to your local machine:

```bash
gh repo clone jebadar/get-root-domain
```

## Usage

The script provides a function named `get_root_domain(url)` that extracts the hostname and domain of the given URL.

### Example:

```python
from url_root_domain_extractor import get_root_domain

result = get_root_domain("https://seller.amazon.com/jebadar")
print(result)
```

### Output:

```json
{
    "host": "seller.amazon.com",
    "root": "amazon.com",
    "domain": ".com"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute by opening issues or pull requests.
