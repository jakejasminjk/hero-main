import wikipediaapi

def print_sections(sections, level=0):
        for s in sections:
                 if(s.title == "Fictional character biography"):
                    print("%s: %s - %s" % ("*" * (level + 1), s.title, s.text))
                    print_sections(s.sections, level + 1)

wiki_wiki = wikipediaapi.Wikipedia('en')

page_py = wiki_wiki.page('Abin Sur')


#print("Page - Exists: %s" % page_py.exists())
# Page - Exists: True
#print("Page - Title: %s" % page_py.title)
# Page - Title: Python (programming language)

print("Summary: %s" % page_py.summary)
print(dir(page_py))
#print(page_py.section_by_title('Fictional character biography').text)
cur = page_py.section_by_title('Fictional character biography').sections
for i in cur:
    print(i.title)

# Page - Summary: Python is a widely used high-level programming language for


##Get all heros then get all wiki info related to heros or get hero then get hero wiki info

wiki_wiki = wikipediaapi.Wikipedia(
        language='en',
        extract_format=wikipediaapi.ExtractFormat.WIKI
)

p_wiki = wiki_wiki.page("Abin Sur")

#print_sections(p_wiki.sections, 0)
#print(dir(p_wiki))
#print(p_wiki.sections)