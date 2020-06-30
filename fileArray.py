import os
import pprint

def filesListFrom(folder):
    filesList = []
    for root, dirs , files in os.walk(folder):
        for file in files:
            path = os.path.join(root, file)
            filesList.append(path.replace(folder, '',1))
    return filesList    
    

if __name__== "__main__":
    folder = input("Enter directory name\n")
    pprint.pprint(filesListFrom(folder))
    
