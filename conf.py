"""
Configuration file for Sphinx documentation builder with NetLogo syntax highlighting
"""

# Import the lexer registration
import sys
import os

# Add current directory to path so we can import our lexer
sys.path.insert(0, os.path.abspath('.'))

# -- Project information -----------------------------------------------------
project = 'Social Computing and Modeling'
copyright = '2025, Eric Araújo and Jonathan Hill'
author = 'Eric Araújo and Jonathan Hill'
release = '1.0'

# -- General configuration ---------------------------------------------------
extensions = [
    'myst_parser',
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
]

# MyST parser configuration
myst_enable_extensions = [
    "colon_fence",
    "deflist", 
    "dollarmath",
    "html_admonition",
    "html_image",
    "replacements",
    "smartquotes",
    "substitution",
    "tasklist",
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'myst.yml']

# -- Options for HTML output ------------------------------------------------
html_theme = 'sphinx_book_theme'
html_title = 'Social Computing and Modeling'

html_theme_options = {
    "repository_url": "https://github.com/ericaraujophd/25fa-social-modeling",
    "use_repository_button": True,
    "use_issues_button": True,
    "use_edit_page_button": True,
    "path_to_docs": "",
    "home_page_in_toc": True,
}

html_static_path = ['_static']

# -- Custom NetLogo syntax highlighting -------------------------------------
pygments_style = 'default'

def setup(app):
    """Setup function to register custom NetLogo lexer with Sphinx"""
    try:
        from netlogo_lexer import NetLogoLexer
        from sphinx.highlighting import lexers
        lexers['netlogo'] = NetLogoLexer()
        print("✅ NetLogo lexer registered with Sphinx successfully!")
    except ImportError as e:
        print(f"⚠️  Warning: Could not import NetLogo lexer: {e}")
    except Exception as e:
        print(f"⚠️  Warning: Could not register NetLogo lexer: {e}")
