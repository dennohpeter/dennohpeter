from statik.templatetags import register

@register.filter
def datetimeformat(date, pattern):
    return  date.strftime(pattern)