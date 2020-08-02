from datetime import datetime
from statik.templatetags import register

@register.simple_tag(name="now")
def now(t=None):
    if t.lower() == "y":
        return datetime.utcnow().year
    return datetime.utcnow()