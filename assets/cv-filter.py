import panflute as pf
import re


def handle_span(elem):
    if elem.attributes.get("style") == "float:right;":
        # Extract content of the span
        inside_span = pf.stringify(elem.content)
        # Remove HTML tags from inside_span
        match = re.sub(r"<.*?>", "", inside_span)
        if match:
            # Wrap right-aligned content in a LaTeX command
            latex_output = pf.RawInline(f"\\hfill \\textbf{{{match}}}", format="latex")
            return latex_output


def action(elem, doc):
    if isinstance(elem, pf.Span):
        return handle_span(elem)
    # Replace <br> with a line break in LaTeX
    elif (
        isinstance(elem, pf.RawInline) and elem.format == "html" and elem.text == "<br>"
    ):
        return pf.LineBreak()


def main(doc=None):
    return pf.run_filter(action, doc=doc)


if __name__ == "__main__":
    main()
