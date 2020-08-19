from statik.templatetags import register

@register.filter
def addClass(block, className):
    print(block)
    block_1, block_2 = block.split(">", maxsplit=1)

    block_1 += f' class={className}'
    return  f'{block_1}>{block_2}'