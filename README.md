# HNRS251A - Honors Computer Science: Social Modeling

This repository contains the course materials for HNRS251A - Honors Computer Science: Social Modeling, a course on social modeling using computational methods and social science background.

## Overview

This course explores the intersection of social sciences and computer science, focusing on agent-based modeling and computational methods to understand human societies and behavior. The course materials are built using MyST (Markedly Structured Text) and compiled into an interactive Jupyter Book.

## Prerequisites

- Python 3.8 or higher

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ericaraujophd/25fa-social-modeling.git
cd 25fa-social-modeling
```

### 2. Install Jupyter Book 2

It's recommended to use a virtual environment:

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install Jupyter Book 2 (pre-release)
pip install "jupyter-book>=2.0.0a0"

# Install other dependencies
pip install -r requirements.txt
```

## Building and Running the Jupyter Book

### Serve the Book Locally

To build and serve the book with live reloading during development:

```bash
jupyter book start
```

This will start a local development server (typically at `http://localhost:3000`) where you can view the book in your browser. The server will automatically rebuild and refresh when you make changes to the source files.

### Alternative: Using MyST directly

Since Jupyter Book 2 is built on the MyST Document Engine, you can also use MyST commands directly:

```bash
# Install MyST (alternative method)
pip install mystmd

# Start the development server
myst start
```

## Project Structure

```text
├── netlogo/             # Complete NetLogo course (7 tutorials)
│   ├── index.md         # Course overview and navigation
│   ├── 0_intro.md       # Tutorial 0: Introduction & Interface
│   ├── 1_basics.md      # Tutorial 1: Basic Programming Concepts
│   ├── 2_agents.md      # Tutorial 2: Working with Agents
│   ├── 3_environment.md # Tutorial 3: Environment and Patches
│   ├── 4_first-model.md # Tutorial 4: Building Complete Model
│   ├── 5_data-analysis.md # Tutorial 5: Data Collection
│   └── 6_advanced.md    # Tutorial 6: Advanced Topics
├── slos/                # Student Learning Outcomes modules
│   ├── module1-introduction.md # Course introduction
│   ├── module2-segregation.md  # Segregation modeling
│   ├── module3-contagion.md    # Contagion modeling
│   ├── module4-cooperation.md  # Cooperation modeling
│   └── module5-polarization.md # Polarization modeling
├── logos/               # Project logos
├── _build/              # Built site (generated)
├── myst.yml             # MyST configuration
├── requirements.txt     # Python dependencies
└── references.bib       # Bibliography
```

## Development

### Adding New Content

1. Create new Markdown files in the appropriate directories
2. Update the table of contents in `myst.yml` if needed
3. Build and test locally using `jupyter book start`

### Editing Existing Content

1. Edit the Markdown files directly
2. The development server will automatically rebuild when files change
3. Refresh your browser to see the changes

## Authors

- **Eric Araújo** - <eric.araujo@calvin.edu>
- **Jonathan Hill** - <jonathan.hill@calvin.edu>

## License

This project is licensed under the CC-BY-4.0 License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally using `jupyter book start`
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Jupyter Book not found**: Make sure you have installed Jupyter Book 2 with `pip install "jupyter-book>=2.0.0a0"`

2. **Python dependencies missing**: Ensure you've activated your virtual environment and installed requirements with `pip install -r requirements.txt`

3. **Build errors**: Check that all referenced files exist and paths in `myst.yml` are correct

4. **Port 3000 in use**: If port 3000 is busy, Jupyter Book will automatically use the next available port

### Getting Help

- Check the [Jupyter Book documentation](https://next.jupyterbook.org/)
- Check the [MyST documentation](https://mystmd.org/guide)
- Open an issue on this repository
- Contact the course instructors

## Additional Resources

- [Jupyter Book 2 Documentation](https://next.jupyterbook.org/)
- [MyST Guide](https://mystmd.org/guide)
- [NetLogo Documentation](https://ccl.northwestern.edu/netlogo/docs/)
- [Agent-Based Modeling Resources](https://www.comses.net/)
